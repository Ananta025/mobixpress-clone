type SectionHeaderProps = {
  title: string
  icon?: string
}

export default function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">
      {icon && <span className="text-red-600 mr-2">{icon}</span>}
      <span className="italic">
        {title.split(' ')[0]} <span className="not-italic font-semibold">{title.split(' ').slice(1).join(' ')}</span>
      </span>
    </h2>
  )
}
