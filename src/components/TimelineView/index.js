// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {
  ResponsiveContainer,
  TimelineContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

class TimeLineView extends Component {
  renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <TimelineContainer>
        <ResponsiveContainer>
          <HeaderContainer>
            <Heading>
              MY JOURNEY OF
              <br />
              <CCBPHeading> CCBP 4.0</CCBPHeading>
            </Heading>
          </HeaderContainer>
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            twoColumns
          >
            {timelineItemsList.map(eachItem =>
              this.renderTimelineCard(eachItem),
            )}
          </Chrono>
        </ResponsiveContainer>
      </TimelineContainer>
    )
  }
}

export default TimeLineView
