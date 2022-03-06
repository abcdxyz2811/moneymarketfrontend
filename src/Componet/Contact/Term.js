import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from "react"
import "./contact.css"
import { right } from '@popperjs/core';
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Term extends React.Component {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (      <>
    <center>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={"right"}
        >
          <Panel header="Terms and Conditions" key="1" extra={genExtra()}>
            <div><span>Overview Contributors Careers Advertise Legal 
Risk WarningTerms And ConditionsPrivacy PolicyCookie Policy
Terms And Conditions
The following describes the terms and conditions (the “ Terms and Conditions ”) upon which Fusion Media Limited (the “ Company ” or “ Fusion Media ” or “ We ”) offers access to the Internet site found at Moneymarket alongside its related country specific sites and any related sub-domains and/or mobile applications thereof (respectively, the “ Site ” or “ App ”, and together the “ Services ”) to you the customer, irrespective of whether or not you are an Account (as defined below) holder (“ you ” or “ You ”)“”.</span>
<br/>
<br />
<span>
PLEASE READ THE PRIVACY POLICY, COOKIE POLICY, RISK WARNING AND ALL OF THE FOLLOWING TERMS AND CONDITIONS INCLUDING THE SPECIAL CONDITIONS BEFORE USING OUR SERVICES. BY CONTINUING TO ACCESS OR USE OUR SERVICES, YOU SIGNIFY YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS. We reserve the right to amend, remove, or add to these Terms and Conditions at any time. Please check the “Last modified” heading at the top of this document to see when the Terms and Conditions were last updated. Any changes to the Terms and Conditions will become effective when we post the revised Terms and Conditions. Your use of the Services, or your provision of personal information following any changes means that you accept the updated Terms and Conditions.
</span>
<br />
<br />
<span>
If, at any time, you do not wish to accept the Terms and Conditions, you may not use our Services. Any terms and conditions proposed by you which are in addition to, or which conflict with these Terms and Conditions are expressly rejected by the Company and will have no force or effect.
<br />
<br />
For Special conditions applicable to Moneymarket Money see  applicable section .
<br />
<br />
You understand and agree that Fusion Media may discontinue or change the Services at any time, without notice. You also understand and agree that Fusion Media may discontinue or restrict your use of the Services for any reason without notice.
<br />
<br />
Your Account
As part of the process necessary to set up an account on the Services (an “ Account ”) and obtain access to certain parts of the Services, you will be required to either provide your full name, email address, password, and phone number (the “ Registration Credentials ”) or register via one of the Third Party Accounts (as defined below). You must ensure that your Registration Credentials are accurate, truthful and updated. We reserve the right to block the creation of your Account based on our inability to confirm the authenticity of your Registration Credentials.
<br />
<br />
As an alternative to registering directly with the Site or App by providing your Registration Credentials, we give you the option to register and login to your Account via one of your account(s) with social media sites such as Facebook, Twitter or Google+ (the “ Third Party Account(s) ”). Please see our  Privacy Policy  for more information about logging in to your Account via a Third Party Account.
<br />
<br />
Unless you log into your Account via a Third Party Account, please note that your email address and password which you provide as part of the Registration Credentials will be used to login in to your Account. You will be solely responsible for maintaining the confidentiality of your email address and password and must immediately notify us of any unauthorized use of your Account. You are solely responsible for all activity and usage on your Account, including, but not limited to, use of the Account by any third party authorized by you to use your email address and password.
<br />
<br />
We permit you to maintain only one Account to access the Services at any time and you hereby represent that you currently have no other Account(s).
<br />
<br />
We reserve the right to terminate your Account, in our sole discretion, at any time without notice. You may terminate your Account at any time by unsubscribing in the manner described at  https://www.Moneymarket/unsubscribe . You must complete the unsubscribing process in the manner described therein. Upon termination, you will receive an automated confirmation via e-mail that the request was received, and your Account will be terminated immediately.

 <br />
 <br />

Ad-free Services
Our basic Services are free, but we may offer You paid upgrades for advanced features such as “ad-free” version of the Services (“ Ad-free Services ”).

You may purchase Ad-free Services, which include, subject to a specific policy/ies of an various app stores (such as Google Play or Apple App Store(, and applicable law, a removal of all the ads on Your Account in all related online platforms, including from our Site and our App, which are available for use in such app stores. These Ad-free Services will be available to You only when You are signed-in to our Services.
<br />
<br />
Payment.  In order to purchase Ad-free Services, You will be required to make the payments specified in the Ad-free Services dedicated offering page, using a payment method made available to You. You represent that you are at least the minimum age required to enter into a legal agreement. In order for You to make such purchase, we may direct you to our trusted payment service providers' websites. You may be required to share with payment service providers Your personal information (such as your name, address, identity number), financial information (e.g. your credit card number, bank account, etc.) and any other information which is required by the payment service providers in order to complete the purchase of the Ad-free Services. We may change the rates of the Ad-free Services from time to time and in our sole discretion.
<br />
<br />
Renewals.  Unless You cancel your Ad-free Services subscription at least 48 hours before the end of the current subscription period, the Ad-free Services are renewed automatically every subscription period to which You have  subscribed, and the charges for such renewed period are made automatically through the payment service provider you have used initially to purchase the Ad-free Services.
<br />
<br />
No Refunds.  Notwithstanding anything to the contrary (but subject to any applicable law), all charges for the Ad-free Services are non-refundable. However, if you believe that you have been charged in error or if you believe you should be refunded for any other reason, you should contact us within 60 days of such charge. We reserve the right to refuse such a refund request for any reason, including if we reasonably believe (i) that you are trying to unfairly exploit this refund policy, for example, by making repetitive refund requests in respect of the same feature; (ii) if you are in breach of the Terms; or (iii) if we reasonably suspect that you are using our Services fraudulently.

</span>
</div>
          </Panel>
        </Collapse>
        <br />
        </center>
      </>
    );
  }
}

export default Term