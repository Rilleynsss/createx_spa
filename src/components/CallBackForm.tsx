import { FC } from "react";
import cls from "../style/callBackForm.module.css";
import rootCls from "../style/index.module.css";

const CallBackForm: FC = () => {
  return (
    <div className={cls.callBackForm}>
      <div className={cls.callBackFormContainer}>
        <h3>A quick way to discuss details</h3>
        <form>
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" placeholder="Your name" />
          <label htmlFor="phone">Phone*</label>
          <input type="text" id="phone" placeholder="Your phone number" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Your working email" />
          <label htmlFor="message">Message*</label>
          <input type="text" id="message" placeholder="Your message" />
          <div className={cls.cbCheckBox}>
            <input
              type="checkbox"
              className={cls.CheckBoxAgree}
              name=""
              id="checkboxAgree"
            />
            <label htmlFor="checkboxAgree">
              I agree to receive communications from Createx Construction
              Bureau.
            </label>
          </div>
          <button className={[rootCls.button, rootCls.primary].join(" ")}>
            send request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallBackForm;
