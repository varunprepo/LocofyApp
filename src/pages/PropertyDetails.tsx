import { FunctionComponent } from "react";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className={styles.contentWrapperParent}>
        <ContentWrapper />
        <section className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer
        supportMargin="unset"
        hostingMargin="unset"
        localhostMargin="unset"
      />
      <div className={styles.band}>
        <div className={styles.bandContent}>
          <div className={styles.copyrightAndPolicies}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.policies}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
