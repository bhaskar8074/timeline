// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseTitleAndTimeDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <CourseTitleAndTimeDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndTimeDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </>
  )
}

export default CourseTimelineCard
