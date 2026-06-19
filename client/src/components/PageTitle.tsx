interface PageTitleProps {
  title: string;
  count: number;
  marginBottom?: string;
}

export default function PageTitle({
  title,
  count,
  marginBottom,
}: PageTitleProps) {
  return (
    <h2
      className="fw-bold "
      style={{ fontSize: "24px", marginBottom: marginBottom }}
    >
      {title} / {count}
    </h2>
  );
}
