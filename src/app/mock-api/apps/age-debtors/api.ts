import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
//import { categories as categoriesData, courses as coursesData, demoCourseSteps as demoCourseStepsData } from 'app/mock-api/apps/academy/data';
import USERS from './data';
@Injectable({
    providedIn: 'root'
})
export class AgeDebtorsMockApi
{
    private _categories: any[] = USERS;
    private _courses: any[] = [];
    private _demoCourseSteps: any[] = [];

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/age-debtors')
            .reply(({request}) => {
                const page = parseInt(request.params.get('page') ?? '1', 10);
                const size = parseInt(request.params.get('size') ?? '10', 10);
                //const id = request.params.get('page');

                // Clone the categories
                let ageRows = cloneDeep(this._categories);
                console.log(ageRows);

                const ageRowsLength = ageRows.length;

                // Calculate pagination details
                const begin = page * size;
                const end = Math.min((size * (page + 1)), ageRowsLength);
                const lastPage = Math.max(Math.ceil(ageRowsLength / size), 1);

                let pagination = {};

                if ( page > lastPage )
                {
                    ageRows = null;
                    pagination = {
                        lastPage
                    };
                }
                else
                {
                    // Paginate the results by size
                    ageRows = ageRows.slice(begin, end);

                    // Prepare the pagination mock-api
                    pagination = {
                        length    : ageRowsLength,
                        size      : size,
                        page      : page,
                        lastPage  : lastPage,
                        startIndex: begin,
                        endIndex  : end - 1
                    };
                }

                // Sort the categories alphabetically by title
                //categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, {pagination,ageRows}];
            });
    }
}
