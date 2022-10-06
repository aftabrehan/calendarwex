import stl from './Label.module.scss'
import Label from './Label'

const LabelLeft = () => {
  //For 24 Hr format

  // const date = new Date()
  // let options = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: false,
  // }
  // const time = date.toLocaleString('en-US', options)
  // console.log(time)

  const hourArray = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ]

  return (
    <div className={stl.labelLeft}>
      {hourArray.map((hr, i) => (
        <Label key={i} height="5rem" content={hr} />
      ))}
    </div>
  )
}

export default LabelLeft
