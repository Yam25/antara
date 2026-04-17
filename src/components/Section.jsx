function Section({ section_title }) {
  // destructing propos
  // const section_title = props.section_title
  // const {section_title} = props
  // guard opertor &&
  return (
    <>
      <h2 className="section-title"> {section_title} </h2>
      {section_title === 'Places to Visit' && (
        <div> places carousel items </div>
      )}
      {section_title === 'Hobbies' && <div> Hobbies carousel items </div>}
    </>
  )
}

export default Section
