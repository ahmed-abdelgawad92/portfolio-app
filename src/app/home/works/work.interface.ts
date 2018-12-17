export class Work{
    constructor(
        public projectLink: string,
        public projectFilter: string,
        public projectName: string,
        public tags: string[],
        public imgSrc: string,
        public backgroundColor: string = null,
        public backgroundSize: string = null
    ){}

}
