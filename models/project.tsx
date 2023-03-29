export interface ProjectModel {
    description: string;
    project_title: string;
    project_year: number;
    project_slug: {
        current: string;
    }
    cover_image: {
        asset: {
            _ref: string;
        }
    }
}