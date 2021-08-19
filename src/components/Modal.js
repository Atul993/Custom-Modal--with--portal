import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = (props) => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    if (!props.show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={`modal ${props.bottom ? "modal2" : ""}`} onClick={props.onClose}>
            <div
                className={`modal-content ${props.bottom ? "modal-content2" : "modal-content1"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div
                    className="modal-body"
                    style={{ display: "flex", position: "relative", alignItems: "center", height: "50vh" }}
                >
                    {props.children}
                </div>
                {props.bottom ? null : (
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="default_screen_btn">
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;
