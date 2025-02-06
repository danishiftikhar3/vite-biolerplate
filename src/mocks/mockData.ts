import { PointProjections, Region, SaleProperty } from '@/types'

export const regionMock = {
    regions: [
        {
            id: 383,
            region_type: 'Sector',
            country: 'UnitedArabEmirates',
            name: 'Sector8',
            market_score: null,
            region_id: 'ARE.3.8_1',
            occupancy: 0.879032258,
            adr: 663.8845679012222,
            revenue: 17894,
            currency: 'USD',
            is_favorite: false,
            primary_image: null,
            row_num: 1,
        },
        {
            id: 38,
            region_type: 'Sector 4092',
            country: 'UnitedArabEmirates',
            name: 'Sector8',
            market_score: null,
            region_id: 'ARE.3.8_1',
            occupancy: 0.879032258,
            adr: 663.8845679012222,
            revenue: 17894,
            currency: 'USD',
            is_favorite: false,
            primary_image: null,
            row_num: 1,
        },
    ],
}

export const mockMarket = {
    id: 1,
    name: 'Test Market',
    region_id: 'GR-01',
    is_favorite: false,
    market_score: 4.567,
    revenue: '145.67',
    adr: '200',
    occupancy: 0.75,
    primary_image: '/images/test.jpg',
    currency: 'EUR',
}

export const dummyEmail = 'dummy@gmail.com'

export const listADM1MockedData = [
    {
        adm_1_id: 'ARE.5_1',
        name: 'RasAl-Khaimah',
        country: 'UnitedArabEmirates',
        country_code: 'UAE',
    },
    {
        adm_1_id: 'ARE.6_1',
        name: 'Sharjah',
        country: 'UnitedArabEmirates',
        country_code: 'UAE',
    },
]

export const mockSaleProperty = [
    {
        property_id: 'prop_12345',
        app_id: 'invest_98765',
        latitude: 40.7128,
        longitude: -74.006,
        title: 'Modern Apartment in NYC',
        country: 'United States',
        region_id: 'NY',
        description:
            'A luxurious apartment located in the heart of New York City.',
        price: '1,200,000',
        image_url: 'https://example.com/property.jpg',
        property_link: 'https://example.com/property/prop_12345',
        is_favorite: false,
        surface_area: '1500',
        images: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ],
        amenities_title: ['Pool', 'Gym', 'Parking'],
        projected_adr: 250,
        projected_occupancy: 0.85,
        projected_revenue: 50000,
        projected_revpar: 212.5,
        bedrooms: 3,
        bathrooms: 2,
        currency: 'USD',
        location: 'Manhattan, NY',
        currency_to_use: 'USD',
        amenities: ['Pool', 'Gym', 'Parking'],
        price_usd: '1,200,000',
        land: false,
        price_sqft: '800',
        total_revenue: '600000',
        avg_occupancy: 0.85,
        avg_adr: 250,
        gross_rental_yield: '5%',
        property_type: 'Apartment',
        exact_location: '123 Main St, New York, NY',
        surface_area_unit: 'sqft',
        availability: 'Available',
        first_published: '2024-01-15',
        hex_id_res7: 'hex7_abc123',
        hex_id_res8: 'hex8_def456',
        hex_id_res9: 'hex9_ghi789',
        furnished: true,
        publisher_id: 'pub_45678',
        adm_1_id: 'NY',
        adm_3_id: 'NYC01',
        country_code: 'US',
        adm_3_name: 'Manhattan',
    },
]

export const mockPointProjections = {
    currency: 'USD',
    projected_adr: '250',
    projected_occupancy: '0.85',
    projected_revenue: '50000',
    projected_revpar: '212.5',
    projected_property_price: '1200000',
}

export const mockRegion = {
    id: 'region_12345',
    country: 'United States',
    name: 'California',
    image: 'https://example.com/california.jpg',
    region_type: 'State',
    multi_polygon: false,
    cordinates: [
        [-120.0, 36.0],
        [-121.0, 37.0],
        [-122.0, 38.0],
        [-123.0, 39.0],
    ],
}
