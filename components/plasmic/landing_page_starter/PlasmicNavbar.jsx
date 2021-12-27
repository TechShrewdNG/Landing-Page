// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: k36LaA3jKH2iM5TPziRS5u
// Component: EJWJhtYFDSVc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: i0ETAkGaBWuO/component
import Button from "../../Button"; // plasmic-import: jXHOU-n1RyP7/component
import { useScreenVariants as useScreenVariantskOpWzg9HWoz5 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kOpWzg9HWoz5/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: k36LaA3jKH2iM5TPziRS5u/projectcss
import * as sty from "./PlasmicNavbar.module.css"; // plasmic-import: EJWJhtYFDSVc/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskOpWzg9HWoz5()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__n1Hih)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nPolv)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__xlrs1)}
            color={"navLink"}
            link={"/services"}
          >
            {"Services"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__hce0L)}
            color={"navLink"}
          >
            {"Features"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__r7Jjc)}
            color={"navLink"}
          >
            {"Company"}
          </Button>

          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button___3C4Kv)}
              color={"navLink"}
              link={"/contact"}
            >
              {"Contact"}
            </Button>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button__rsUWn)}
            color={"navLink"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__s26Z5)}
            color={"darkGray"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__bt9J1)}>
            <button
              className={classNames(
                projectcss.button,
                projectcss.__wab_text,
                sty.button__o8Is
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__eZnhs)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
