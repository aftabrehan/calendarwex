import stl from './Label.module.scss'

const Label = ({ arg, variant, days, icon }) => {
  console.log(variant)
  return (
    <div className={stl.label}>
      {days.map((item, i) => (
        <div key={i} className={`stl.${variant}`}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Label
