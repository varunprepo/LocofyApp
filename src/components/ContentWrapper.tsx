import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./ContentWrapper.module.css";

const ContentWrapper: FunctionComponent = () => {
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.contentArea}>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.frameGroup}>
            <img className={styles.frameChild1} alt="" src="/frame-50@2x.png" />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent}>
                <div className={styles.div}>5.0</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.reviewsWrapper}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.bookingDetails}>
          <div className={styles.pricingWrapper}>
            <div className={styles.priceParent}>
              <b className={styles.price}>$658</b>
              <div className={styles.pricePerNight}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.bookingRecommendation}>
              <div className={styles.icontrendParent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.iconBackground} />
                  </div>
                </div>
                <div className={styles.bestTimeToBookWrapper}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostedByParent}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.hostImageParent}>
            <img
              className={styles.hostImageIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.michelleWardParent}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.hostStatus}>
              <img className={styles.statusIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
