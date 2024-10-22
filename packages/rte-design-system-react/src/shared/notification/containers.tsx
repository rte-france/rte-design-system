/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ReactNode } from "react";
import {
  Flip,
  ToastContainer,
  ToastContainerProps,
  useToast,
  useToastContainer,
} from "react-toastify";

// must be after react-toastify import
import "react-toastify/dist/ReactToastify.css";
import "./containers.css";
type NotificationContainerProps = Omit<
  ToastContainerProps,
  "className" | "toastClassName"
>;

export const NotificationContainer = (props: NotificationContainerProps) => (
  <ToastContainer {...props} closeButton={false} icon={false} />
);

export const ToastContainerId = "toast";

export const IgToastContainer = () => (
  <NotificationContainer
    containerId={ToastContainerId}
    position="top-center"
    limit={1}
    autoClose={5000}
    pauseOnFocusLoss={false}
  />
);

export const AlertContainerId = "alert";
export const IgAlertContainer = () => (
  <NotificationContainer
    containerId={AlertContainerId}
    position="bottom-right"
    limit={3}
    autoClose={false}
    stacked
    style={{ width: "500px" }}
    hideProgressBar
  />
);

export const BannerContainerId = "banner";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BannerToast = (props: any) => {
  const { preventExitTransition, toastRef, playToast } = useToast(props);
  const {
    transition: Transition,
    position,
    deleteToast,
    isIn,
    children,
  } = props;
  return (
    <Transition
      playToast={playToast}
      isIn={isIn}
      done={deleteToast}
      position={position}
      preventExitTransition={preventExitTransition}
      nodeRef={toastRef}
    >
      <div ref={toastRef}>{children as ReactNode}</div>
    </Transition>
  );
};

export const IgBannerContainer = () => {
  const { getToastToRender, isToastActive } = useToastContainer({
    containerId: BannerContainerId,
    position: "top-center",
    limit: 1,
    transition: Flip,
  });
  return (
    <div className="sticky top-0 z-50">
      {getToastToRender((_position, toastList) =>
        toastList.map(({ content, props: toastProps }) => (
          <BannerToast
            {...toastProps}
            isIn={isToastActive(toastProps.toastId, BannerContainerId)}
            key={toastProps.toastId}
          >
            {content}
          </BannerToast>
        ))
      )}
    </div>
  );
};
