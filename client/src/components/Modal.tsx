import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function Modal({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop fade show"
            style={{ zIndex: 1040, cursor: "pointer" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            style={{ zIndex: 1050 }}
            onClick={onClose}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="modal-content shadow border-0 rounded-4"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.3 }}
              >
                <div className="modal-header border-0 pb-0 position-relative">
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3 shadow-none text-dark"
                    aria-label="Close"
                    style={{ zIndex: 1060, cursor: "pointer" }}
                    onClick={onClose}
                  />
                </div>

                <div className="modal-body p-4 text-center">
                  <h5 className="modal-title fw-bold text-dark mb-3 fs-4">
                    {title}
                  </h5>
                  <p className="text-secondary">Product: '{message}'</p>
                </div>

                <div className="modal-footer border-0 d-flex justify-content-center gap-3 pb-4">
                  <button
                    type="button"
                    className="btn btn-light px-4 py-2 rounded-pill fw-semibold"
                    onClick={onClose}
                  >
                    Відміна
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger px-4 py-2 rounded-pill fw-semibold d-flex align-items-center gap-1"
                    onClick={onConfirm}
                  >
                    Видалити
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
