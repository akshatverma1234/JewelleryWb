import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoBagHandle } from "react-icons/io5";

const Checkout = () => {
  return (
    <section className="!py-10">
      <div className="container flex gap-5">
        <div className="leftCol !w-[70%]">
          <div className="card bg-white shadow-md !p-5 rounded-md !w-full">
            <h1>Billing Details</h1>

            <form className="!w-full !mt-5">
              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[50%]">
                  <TextField
                    label="First name"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">Street address *</h6>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[100%]">
                  <TextField
                    label="House No. and Street Name"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[100%]">
                  <TextField
                    label="Apartment, suite, unit, etc. (optional)"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[50%]">
                  <TextField
                    label="Town / City *"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="State / Country *"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">Postcode / ZIP *</h6>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[100%]">
                  <TextField
                    label="Pin Code"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col !w-[50%]">
                  <TextField
                    label="Phone number "
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
                <div className="col !w-[50%]">
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    className="!w-full"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightCol !w-[30%]">
          <div className="card shadow-md bg-white !p-5 rounded-md">
            <h2 className="!mb-4">Your Order</h2>

            <div className="flex items-center justify-between !py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>

            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2 !mb-5">
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden group cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                      className="!w-full  transition-all group-hover:scale-105"
                      alt="checkout images"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">The Golden Chain....</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">₹1500</span>
              </div>
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden group cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                      className="!w-full  transition-all group-hover:scale-105"
                      alt="checkout images"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">The Golden Chain....</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">₹1500</span>
              </div>
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden group cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                      className="!w-full  transition-all group-hover:scale-105"
                      alt="checkout images"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">The Golden Chain....</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">₹1500</span>
              </div>
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden group cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                      className="!w-full  transition-all group-hover:scale-105"
                      alt="checkout images"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">The Golden Chain....</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">₹1500</span>
              </div>
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden group cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                      className="!w-full  transition-all group-hover:scale-105"
                      alt="checkout images"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">The Golden Chain....</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">₹1500</span>
              </div>
            </div>
            <Button className="btn-org btn-lg !w-full flex gap-2 items-center">
              <IoBagHandle className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
