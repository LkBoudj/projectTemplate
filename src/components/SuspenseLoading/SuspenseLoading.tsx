import { Suspense } from "react";
import LoadingOverlay from "../LoadingOverlay";

const SuspenseLoading = ({ children }: React.PropsWithChildren) => {
    return (
        <Suspense
            fallback={
                <LoadingOverlay
                    visible={true}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 3 }}
                />
            }
        >
            {children}
        </Suspense>
    );
};

export default SuspenseLoading