import { extend, override } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';

import FlarumComponentElement from './FlarumComponentElement';

window.customElements.define('flarum-component', FlarumComponentElement);

app.initializers.add('reflar/inject-mithril-components', () => {
    override(DiscussionList.prototype, 'loadResults', function(org) {
        const preloadedDiscussions = app.preloadedApiDocument();
        const discussion = preloadedDiscussions && preloadedDiscussions[0];

        if (!discussion || !discussion.data || discussion.data.type !== 'discussions') app.data.apiDocument = null;

        return org();
    });

    extend(DiscussionList.prototype, 'requestParams', function(params) {
        const query = params.filter && params.filter.q;
        const sort = params.sort;

        Object.assign(params, this.props.params);

        if (query) {
            if (!params.filter) params.filter = {};
            if (params.filter.q !== query) params.filter.q = `${query} ${params.filter.q || ''}`.trim();
        }

        params.sort = sort || params.sort;
    });

    override(DiscussionList.prototype, 'parseResults', function(org, results) {
        const limit = this.props.params && this.props.params.page && this.props.params.page.limit;
        let parsed = results;

        if (limit) {
            parsed = results.slice(0, limit);
            parsed['payload'] = results['payload'];
        }

        return org(parsed);
    });
});
