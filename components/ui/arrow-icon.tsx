type ArrowIconProps = {
  className?: string;
};

export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
