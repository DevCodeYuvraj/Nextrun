"use client";

function LogoBox({ size, background, children }) {
  const radius = Math.round(size * 0.23);
  const iconSize = size * 0.58;

  return (
    <span
      style={{
        width: size,
        height: size,
        minWidth: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius,
        background,
        overflow: "hidden",
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  );
}

/* BITCOIN */

export function BitcoinLogo({ size = 44 }) {
  return (
    <LogoBox size={size} background="#5964E8">
      <path
        d="M18.8 14.85c1.78-.66 2.75-1.86 2.48-3.72-.35-2.54-2.55-3.12-5.3-3.37V4.5h-2v3.17c-.52 0-1.06.01-1.59.02V4.5h-2v3.26c-.43.01-.85.02-1.26.02H6.38v2.13s1.48-.03 1.46 0c.81 0 1.08.47 1.15.88v8.93c-.04.26-.2.68-.77.68.03.02-1.46 0-1.46 0l-.38 2.38h2.59c.48 0 .95.01 1.41.01V26h2v-3.17c.55.01 1.08.01 1.59.01V26h2v-3.21c3.37-.2 5.73-1.04 6.02-4.21.23-2.55-.96-3.69-3.19-4.14v.41Zm-6.36-4.82c1.13 0 4.68-.36 4.68 2 0 2.25-3.55 1.99-4.68 1.99v-3.99Zm0 10.39v-4.4c1.36 0 5.61-.39 5.61 2.2 0 2.49-4.25 2.2-5.61 2.2Z"
        fill="#FFFFFF"
      />
    </LogoBox>
  );
}

/* RIPPLE / XRP */

export function RippleLogo({ size = 42 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#12C5F5" />

      <circle cx="15" cy="16" r="3.2" stroke="white" strokeWidth="2.3" />
      <circle cx="31.5" cy="11.5" r="3.2" stroke="white" strokeWidth="2.3" />
      <circle cx="31.5" cy="30.5" r="3.2" stroke="white" strokeWidth="2.3" />

      <path
        d="M18 16L28.4 12.2"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M18 17.8L28.5 29"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M31.5 14.8V27.2"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ETHEREUM */

export function EthereumLogo({ size = 44 }) {
  return (
    <LogoBox size={size} background="#E64DB5">
      <path
        d="M16 4.5 9.3 15.75 16 19.62l6.7-3.87L16 4.5Z"
        fill="#FFFFFF"
      />

      <path
        d="m16 27.5-6.7-9.88L16 21.5l6.7-3.88L16 27.5Z"
        fill="#FFFFFF"
        opacity=".82"
      />

      <path
        d="m16 19.62-6.7-3.87L16 12.7l6.7 3.05-6.7 3.87Z"
        fill="#FFFFFF"
        opacity=".62"
      />
    </LogoBox>
  );
}

/* LITECOIN */

export function LitecoinLogo({ size = 44 }) {
  return (
    <LogoBox size={size} background="#7929C7">
      <path
        d="m18.4 6.2-2.02 7.61 3.08-1.15-.68 2.55-3.08 1.15-1.47 5.55h8.22l-.78 2.89H9.82l1.82-6.88-2.7 1.01.68-2.55 2.7-1.01 2.43-9.17h3.65Z"
        fill="#FFFFFF"
      />
    </LogoBox>
  );
}

/* LOOKUP */

export const cryptoLogos = {
  Bitcoin: BitcoinLogo,
  bitcoin: BitcoinLogo,
  BTC: BitcoinLogo,
  btc: BitcoinLogo,

  Ripple: RippleLogo,
  ripple: RippleLogo,
  XRP: RippleLogo,
  xrp: RippleLogo,

  Ethereum: EthereumLogo,
  ethereum: EthereumLogo,
  ETH: EthereumLogo,
  eth: EthereumLogo,

  Litecoin: LitecoinLogo,
  litecoin: LitecoinLogo,
  LTC: LitecoinLogo,
  ltc: LitecoinLogo,
};