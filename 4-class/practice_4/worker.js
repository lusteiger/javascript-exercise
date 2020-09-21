// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    const personIntroduce = super.introduce();
    return `${personIntroduce} I am a Worker. I have a job.`;
  }
}
