/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcButton {
    }
    interface WcMessageBox {
        "message": string;
        "variation": "success" | "pending" | "warning" | "default";
    }
}
declare global {
    interface HTMLWcButtonElement extends Components.WcButton, HTMLStencilElement {
    }
    var HTMLWcButtonElement: {
        prototype: HTMLWcButtonElement;
        new (): HTMLWcButtonElement;
    };
    interface HTMLWcMessageBoxElement extends Components.WcMessageBox, HTMLStencilElement {
    }
    var HTMLWcMessageBoxElement: {
        prototype: HTMLWcMessageBoxElement;
        new (): HTMLWcMessageBoxElement;
    };
    interface HTMLElementTagNameMap {
        "wc-button": HTMLWcButtonElement;
        "wc-message-box": HTMLWcMessageBoxElement;
    }
}
declare namespace LocalJSX {
    interface WcButton {
    }
    interface WcMessageBox {
        "message"?: string;
        "variation"?: "success" | "pending" | "warning" | "default";
    }
    interface IntrinsicElements {
        "wc-button": WcButton;
        "wc-message-box": WcMessageBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-button": LocalJSX.WcButton & JSXBase.HTMLAttributes<HTMLWcButtonElement>;
            "wc-message-box": LocalJSX.WcMessageBox & JSXBase.HTMLAttributes<HTMLWcMessageBoxElement>;
        }
    }
}
