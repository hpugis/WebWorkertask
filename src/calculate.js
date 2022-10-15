import TaskProcessor from "./core/TaskProcessor";

export default  class calculate{
    constructor(){
        console.log(window.location.href)
        this.worker=new TaskProcessor('CreateCalculateWorker',3);
    }
    startTaskworker(){
        const workerPromise= this.worker.scheduleTask({
            data:10
        });
        return workerPromise;
    }
}