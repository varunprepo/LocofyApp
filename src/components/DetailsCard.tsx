import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  amenityCardRows?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  amenityCardRows,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const aPrivateRoomStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={styles.detailscard}>
      <img
        className={styles.splitSplitterIcon}
        loading="lazy"
        alt=""
        src={amenityCardRows}
      />
      <div className={styles.filterFinder}>
        <div
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </div>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
