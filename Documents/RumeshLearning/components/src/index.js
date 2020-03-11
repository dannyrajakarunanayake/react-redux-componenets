import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this!
                </div>
            </ApprovalCard>



            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45Pm"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00Pm"
                    content="I like the subjects"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="jane"
                    timeAgo="Yesterday at 5:00Pm"
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

