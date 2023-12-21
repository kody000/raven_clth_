import { InstagramFilledLogo, TikTokFilledLogo } from "../../Icons/Icons";
import useStyles from "./Faq.style";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Faq = () => {
  const classes = useStyles();

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={"Frequently asked questions"} />
        <div className={classes.generalContainer}>
          <div className={classes.leftSideContainer}>
            <div className={classes.faqContainer}>
              <div className={classes.faqTitle}>Delivery</div>
              <div className={classes.faqText}>
                <div className={classes.textSectionContainer}>
                  <div className={classes.textSectionTitle}>Delivery time</div>
                  <div className={classes.textSectionText}>
                    You can find detailed informaion in the product description
                    and on our Instagram page. For any questions, please contact
                    us via email at: contact@ravenclth.com. The delivery time
                    depends on the purchased item and can be checked in the
                    product description
                  </div>
                  <div className={classes.textSectionTitle}>
                    Delivery options
                  </div>
                  <div className={classes.textSectionText}>
                    (Poland)
                    <li>InPost parcel locker - 11,99 PLN ($2,89)</li>
                    <li>InPost courier - 14,99 PLN ($3,62)</li>
                    (Worldwide)
                    <li>DHL courier - price depends on region and place</li>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.faqContainer}>
              <div className={classes.faqTitle}>Payments</div>
              <div className={classes.faqText}>
                <div className={classes.textSectionContainer}>
                  <div className={classes.textSectionTitle}>Processed by</div>
                  <div className={classes.textSectionText}>
                    <li> Polish ePayments</li>
                    <li>PayPal</li>
                    <li>Stripe</li>
                  </div>
                  <div className={classes.textSectionText}>
                    We accept credit cards, BLIK, fast transfers, and PayPal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.faqContainer}>
              <div className={classes.faqTitle}>Returns</div>
              <div className={classes.faqText}>
                <div className={classes.textSectionContainer}>
                  <div className={classes.textSectionTitle}>Terms</div>
                  <div className={classes.textSectionText}>
                    <ol className={classes.termsList}>
                      <li>
                        You can return the item within 14 days from the day you
                        receive the shipment from ravenclth.com
                      </li>
                      <li>
                        Before this deadline expires, please send us the
                        purchased item along with the completed return form,
                        which can be found in package with items.
                      </li>
                      <li>
                        Make sure that the returned item is in the same
                        condition as you received it from ravenclth, with tags
                        intact and without stains.
                      </li>
                      <li>
                        Within 14 days from the date of receiving the shipment,
                        you will receive a refund from us.
                      </li>
                      <li>
                        We will refund you the equivalent of the price of
                        returned item without shipping costs.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.faqContainer}>
              <div className={classes.faqTitle}>Contact</div>
              <div className={classes.faqText}>
                <div className={classes.textSectionContainer}>
                  <div className={classes.textSectionTitle}>
                    Business contact
                  </div>
                  <div className={classes.textSectionText}>
                    Any offers of collaboration should be sent to
                    contact@ravenclth.com
                  </div>
                  <div className={classes.textSectionTitle}>
                    Personal contact
                  </div>
                  <div className={classes.textSectionText}>
                    If you have any kind of personalized question you can
                    contact us through :
                    <div className={classes.contactLinkContainer}>
                      <InstagramFilledLogo />
                      <div>raven.clth_</div>
                    </div>
                    <div className={classes.contactLinkContainer}>
                      <TikTokFilledLogo />
                      <div>@raven.clth_</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
