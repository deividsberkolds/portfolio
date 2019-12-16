import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBarComp: React.FC = () => (
  <div className="col">
    <div className="text-center">NodeJs</div>
    <Progress color="success" />
    <div className="text-center">Typescript</div>
    <Progress color="info" value="35" />
    <div className="text-center">Redux</div>
    <Progress bar color="warning" value={65} />
    <div className="text-center">React</div>
    <Progress color="danger" value={85} />
    <div className="text-center">100%</div>
    <Progress value="100" />
  </div>
);

export default ProgressBarComp;
