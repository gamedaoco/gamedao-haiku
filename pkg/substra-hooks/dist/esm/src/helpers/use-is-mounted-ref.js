import { useEffect, useRef } from 'react';
export const useIsMountedRef = () => {
    const isMountedRef = useRef(null);
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    });
    return isMountedRef;
};
//# sourceMappingURL=use-is-mounted-ref.js.map