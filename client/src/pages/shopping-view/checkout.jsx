import Address from "@/components/shopping-view/address";
import img from "../../assets/account.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [showOtherPaymentOptions, setShowOtherPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [showUpiUnavailable, setShowUpiUnavailable] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  console.log(currentSelectedAddress, "cartItems");

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  function handleInitiatePaypalPayment() {
    if (cartItems.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });
      return;
    }
    if (currentSelectedAddress === null) {
      toast({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });
      return;
    }
    setShowOtherPaymentOptions(true); // Only show payment options, do NOT create order here
  }

  function handleSelectPaymentMethod(method) {
    if (method === "upi") {
      setShowUpiUnavailable(true);
      return;
    }
    setSelectedPaymentMethod(method);
  }

  function handleOrderNow() {
    if (!selectedPaymentMethod) return;
    setIsOrderProcessing(true);
    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: selectedPaymentMethod,
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };
    dispatch(createNewOrder(orderData)).then((data) => {
      setIsOrderProcessing(false);
      if (data?.payload?.success) {
        window.location.href = "/shop/payment-success";
      }
    });
  }

  if (approvalURL) {
    window.location.href = approvalURL;
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent key={item.productId || item._id} cartItem={item} />
              ))
            : null}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Button onClick={handleInitiatePaypalPayment} className="w-full" disabled={showOtherPaymentOptions}>
              Place Order
            </Button>
            {showOtherPaymentOptions && (
              <div className="mt-4 w-full flex flex-col gap-2">
                <div className="mb-2 text-lg font-semibold text-gray-700">Choose Payment Method</div>
                <Button variant={selectedPaymentMethod === "cash-on-delivery" ? "default" : "outline"} className="w-full" onClick={() => handleSelectPaymentMethod("cash-on-delivery")}>Cash on Delivery</Button>
                <Button variant={selectedPaymentMethod === "upi" ? "default" : "outline"} className="w-full" onClick={() => handleSelectPaymentMethod("upi")}>UPI</Button>
                {selectedPaymentMethod && (
                  <Button className="w-full mt-4" onClick={handleOrderNow} disabled={isOrderProcessing}>
                    {isOrderProcessing ? "Placing Order..." : "Order Now"}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Add popup/modal for UPI unavailable */}
      {showUpiUnavailable && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <div className="text-xl font-semibold mb-4">UPI Not Available</div>
            <div className="mb-6">Only Cash on Delivery is available at this time.</div>
            <Button className="w-full" onClick={() => setShowUpiUnavailable(false)}>OK</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCheckout;
