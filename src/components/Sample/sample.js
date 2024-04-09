import {Heading, Paragraph, CustomeButton} from '../../StyleComponent'

const Sample = () => {
  console.log('this is the styled component')
  return (
    <div>
      <Heading>heading</Heading>
      <Paragraph>Welcome to React context and Styled components</Paragraph>
      <CustomeButton type="button">Close</CustomeButton>

      <CustomeButton type="button" outline>
        Close
      </CustomeButton>
    </div>
  )
}

/* <CustomeButton color="blue" bgColor="white">
        Example
      </CustomeButton> */

//     <CustomeButton type="button" outline={false}>
//     Close
//   </CustomeButton>

export default Sample
