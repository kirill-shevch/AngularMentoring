# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2021-04-18
### Added
- Basic components for product and cart
- Logic for buyng products and adding them into cart

## [0.0.2] - 2021-05-03
### Added
- Split application into few modules
- Products in the cart now is the list of unique items with count
- Add sum and total count of cart items
- Add highlight to the cart items

## [0.0.3] - 2021-05-16
### Added
- Core services and first-component in core odule to test them
- New directive with inpout parameter 

## [0.0.4] - 2021-05-22
### Added
- Add order-by pipe
- Add sort-product component
- Customize filters in sort component to use this values in order-by pipe

## [0.0.5] - 2021-06-13
### Added
- Add routing modules
- Add new component for product layout
- Add new component to login into the application
- Add new module admin module (empty, but guarded)
- Add guard to check is user logged in

## [0.0.6] - 2021-06-20
### Added
- Add local json database
- Add product-promise service to work with new local database
- Add cart-promise service to work with new local database
- Replace old services with new promise services
- Add interceptor to measure request time for cart service

## [0.0.7] - 2021-06-28
### Added
- Add new module - Shops
- Add new components - for single shop and for shop list
- Add actions, reducers and effects for new entity and for router
- Add selectors for shops and routing

## [0.0.8] - 2021-07-13
### Added
- Add new component process-order to create orders
- Add reactive form to create a new order

## [0.0.9] - 2021-07-15
### Added
- Configure unit tests
- Fix broken tests and remove obsolete tests
- Add new tests for pipe and product component