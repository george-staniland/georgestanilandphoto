export interface ProjectModel {
    description: string;
    project_title: string;
    project_year: number;
    cover_image: {
        asset: {
            _ref: string;
        }
    }
}