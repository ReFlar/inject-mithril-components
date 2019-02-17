<?php

/*
 * This file is part of reflar/inject-js-components.
 *
 * Copyright (c) 2019 David Sevilla Martín.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Reflar\InjectJsComponents;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
];
