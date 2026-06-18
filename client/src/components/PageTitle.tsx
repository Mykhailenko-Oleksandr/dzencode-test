interface PageTitleProps {
  title: string;
  count: number;
}

export default function PageTitle({ title, count }: PageTitleProps) {
  return (
    <h2 className="fw-bold mb-4" style={{ fontSize: "24px" }}>
      {title} / {count}
    </h2>
  );
}
