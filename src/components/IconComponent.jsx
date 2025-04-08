export function IconComponent({ link, icon, name }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group">
        <div className="w-8 h-8 flex items-center justify-center rounded-md p-1 transition-all duration-300 hover:bg-accent">
          {icon}
        </div>
        {/* Tooltip / Bubble */}
        {name && <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-800 bg-gray-700 text-white text-xs rounded-full py-1 px-2">
          {name}
        </div>}
      </div>
    </a>
  );
}
