export default function CornerTicks({ color }: { color: string }) {
  return (
    <>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        <path d="M0,8 V0 H8" fill="none" stroke={color} strokeWidth="1.4" />
      </svg>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <path d="M22,8 V0 H14" fill="none" stroke={color} strokeWidth="1.4" />
      </svg>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        style={{ position: "absolute", bottom: 10, left: 10 }}
      >
        <path d="M0,14 V22 H8" fill="none" stroke={color} strokeWidth="1.4" />
      </svg>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <path d="M22,14 V22 H14" fill="none" stroke={color} strokeWidth="1.4" />
      </svg>
    </>
  );
}
