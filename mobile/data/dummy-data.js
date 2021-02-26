import { Category, Worker } from '../models';

const CATEGORIES = [
    new Category(
        '1',
        'Gas',
        'gas-cylinder'
    ),
    new Category(
        '2',
        'Electricity',
        'power-plug'
    ),
    new Category(
        '3',
        'Air conditioner',
        'air-conditioner'
    ),
    new Category(
        '4',
        'Carpenter',
        'hammer'
    ),
    new Category(
        '5',
        'Car wash',
        'car'
    ),
    new Category(
        '6',
        'Gardener',
        'flower'
    ),
    new Category(
        '7',
        'Moving',
        'truck'
    ),
    new Category(
        '8',
        'Paint',
        'format-paint'
    ),
    new Category(
        '9',
        'Pet care',
        'dog'
    ),
    new Category(
        '10',
        'Pool',
        'swim'
    )
];

const WORKERS = [
    new Worker(
        '1',
        [
            new Category(
                '1',
                'Gas'
            )
        ],
        'Juan',
        'Avellaneda 123',
        '2000-5000'
    ),
    new Worker(
        '2',
        [
            new Category(
                '2',
                'Electricity'
            )
        ],
        'Pedro',
        'Goyena 234',
        '3000-5000'
    ),
    new Worker(
        '3',
        [
            new Category(
                '3',
                'Air Conditioner'
            )
        ],
        'Marcelo',
        'Cangallo 1230',
        '2000-7000'
    ),
    new Worker(
        '4',
        [
            new Category(
                '4',
                'Carpenter'
            )
        ],
        'Damian',
        'Pueyrredon 304',
        '1000-1500'
    ),
    new Worker(
        '5',
        [
            new Category(
                '5',
                'Car Wash'
            )
        ],
    'Carlos',
    'Cantilo 20',
    '2000-2800'
    ),
new Worker(
    '6',
    [
        new Category(
            '6',
            'Gardener'
        )
    ],
    'Roberto',
    'Rojas 3035',
    '3400-5000'
),
    new Worker(
        '7',
        [
            new Category(
                '7',
                'Moving'
            )
        ],
        'Matias',
        'Mitre 504',
        '1400-10000'
    ),
    new Worker(
        '8',
        [
            new Category(
                '8',
                'Paint'
            )
        ],
        'Walter',
        'Marcelo T. de Alvear 1945',
        '1000-6000'
    ),
    new Worker(
        '9',
        [
            new Category(
                '9',
                'Pet Care'
            )
        ],
        'Tomas',
        'Alsina 983',
        '1500-3000'
    ),
    new Worker(
        '10',
        [
            new Category(
                '10',
                'Pool'
            )
        ],
        'Facundo',
        'Escobar 666',
        '4000-8000'
    ),
];

const SETTINGS = [{ id: '0', name: 'Settings', screen: 'Settings' }, { id: '1', name: 'Notifications', screen: 'Notifications' }, { id: '2', name: 'Offer Services as a Professional', screen: 'ProfessionalRegistration' }];

const SERVICES = [];

export { CATEGORIES, WORKERS, SETTINGS, SERVICES };