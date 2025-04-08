export function AllTechStackIcons({color, hoverColor, animation, icon: Icon}){

    const classes = `${color} ${hoverColor} transition duration-300 text-8xl ${animation} opacity-100`

    return <div className="relative h-36 w-36 border border-accent rounded-xl overflow-hidden">
    {/* Background layer with opacity */}
    <div className="absolute inset-0 bg-secondary opacity-65 pointer-events-none z-0" />
    
    {/* Content layer (icon) */}
    <div className="relative z-10 pt-6 pl-6">
      <Icon className={classes} />
    </div>
  </div>
  
}