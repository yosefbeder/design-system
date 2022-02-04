# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.4.0](https://github.com/yosefbeder/design-system/compare/v2.3.1...v2.4.0) (2022-02-04)


### Features

* **components:** add select ([5c1defc](https://github.com/yosefbeder/design-system/commit/5c1defc43c1809515a15e74a01e400291b30fb4e))

### [2.3.1](https://github.com/yosefbeder/design-system/compare/v2.3.0...v2.3.1) (2022-01-28)


### Bug Fixes

* **components:** add uuid locally again ([7b80050](https://github.com/yosefbeder/design-system/commit/7b80050a033b3ec8d5ee93bb20df3f83d0d233b8))

## [2.3.0](https://github.com/yosefbeder/design-system/compare/v2.2.0...v2.3.0) (2022-01-22)


### Features

* **components:** add Textarea ([ae44a9a](https://github.com/yosefbeder/design-system/commit/ae44a9a481b2cd2d725580391b34920a09ebc565))

## [2.2.0](https://github.com/yosefbeder/design-system/compare/v2.1.0...v2.2.0) (2022-01-17)


### Features

* **components:** add disabled prop to RadioGroup ([370d95c](https://github.com/yosefbeder/design-system/commit/370d95cbe6f9aa1226fa8ebfb4ae57e97a9f3be9))

## [2.1.0](https://github.com/yosefbeder/design-system/compare/v2.0.0...v2.1.0) (2022-01-15)


### Features

* **components:** make RadioGroup totally controlled ([eed3861](https://github.com/yosefbeder/design-system/commit/eed3861cd5b04e7c65d3ae3f74d429f29e498875))

## [2.0.0](https://github.com/yosefbeder/design-system/compare/v1.0.0...v2.0.0) (2022-01-01)


### ⚠ BREAKING CHANGES

* neither themes nor css-reset exists anymore

### Features

* remove theming ([8a29d0b](https://github.com/yosefbeder/design-system/commit/8a29d0bdc6850aab14bab794d91527f2d2877d83)), closes [#7](https://github.com/yosefbeder/design-system/issues/7)

## 1.0.0 (2021-12-17)


### ⚠ BREAKING CHANGES

* theme type changed
* **components:** add themes to the disabled state in primary and secondary buttons
* **custom-props:** the custom props from the old version aren't valid anymore
* **components:** radio doesn't represent the input itself anymore
* **components:** both components represent the component with its label
* **components:** change `isNavigatedTo` to `navigatedTo` in NavLink.

### Features

* add accent and neutral options to the theme ([bd21122](https://github.com/yosefbeder/design-system/commit/bd211223d2d36ca66e59611cfc754e2bcc6e6d71))
* add standard-version ([d0a0f82](https://github.com/yosefbeder/design-system/commit/d0a0f82191cd629a5f497ceafe77d5a24859d5c3))
* add theming via ThemeProvider ([75450f8](https://github.com/yosefbeder/design-system/commit/75450f8ab4d978729e2421577d4e67e2fc7ba768))
* **components:** abstract radio ([0dc0d94](https://github.com/yosefbeder/design-system/commit/0dc0d94b250f0958e64102e4ecb4cbcfbdde6fdc))
* **components:** abstract the APIs of checkbox and switch ([b841786](https://github.com/yosefbeder/design-system/commit/b8417862a1a1159e7bfe3ca6cf5dff67baf51c9e))
* **components:** add an outline to the checkbox on focus ([4f7fd4d](https://github.com/yosefbeder/design-system/commit/4f7fd4df37ccea3c88a556f08cebe8b1f10dbc1f))
* **components:** add an outline to the input on focus ([dc41713](https://github.com/yosefbeder/design-system/commit/dc417134ee751909aa9442debe7f1ffd8d2ec7c6))
* **components:** add an outline to the radio on focus ([24c10ad](https://github.com/yosefbeder/design-system/commit/24c10ad7fb4a14960a3011ed5800cac5ca19cf73))
* **components:** add an outline to the toggle switch on focus ([8b2dab1](https://github.com/yosefbeder/design-system/commit/8b2dab190f0e141b8303f0950174a536877fad61))
* **components:** add focus state to the button ([02a254d](https://github.com/yosefbeder/design-system/commit/02a254d56d5f0a4bdfdbef34d602ffd4056dc5dd))
* **components:** add focus state to the icon button and show the tooltip on focus ([adace3f](https://github.com/yosefbeder/design-system/commit/adace3f5c927d4612162b1a987a8c6a95b4f7273))
* **components:** add focus state to the nav link ([53c0c35](https://github.com/yosefbeder/design-system/commit/53c0c350fcd826476d818752114f3d997ec3ec74))
* **components:** add generated ids and labels to checkbox and switch ([efd782a](https://github.com/yosefbeder/design-system/commit/efd782af39a1ff839c382ce90c8fb523c2dda43f))
* **components:** add getting input ref to checkbox and switch ([dc6391c](https://github.com/yosefbeder/design-system/commit/dc6391c6e805011d2933d306e29116323319e15a))
* **components:** add themes to the disabled state in primary and secondary buttons ([1acc19f](https://github.com/yosefbeder/design-system/commit/1acc19f49d335ee47f6c23a5c0c5453938a655b1))
* **components:** make the disabled state distinguishable in the switch ([e16d1b2](https://github.com/yosefbeder/design-system/commit/e16d1b29bdef3b54259b487b87227c391b6cb846)), closes [#5](https://github.com/yosefbeder/design-system/issues/5)
* **components:** remove uuid ([545015f](https://github.com/yosefbeder/design-system/commit/545015fab2cdbc1acda3026f202b71fb14731917)), closes [#6](https://github.com/yosefbeder/design-system/issues/6)
* **components:** replace custom variables with the new ones ([cfdc862](https://github.com/yosefbeder/design-system/commit/cfdc8620bfa8e396ac37a5942f4637ac226fd320))
* **custom-props:** add tailwindcss design system ([78480cc](https://github.com/yosefbeder/design-system/commit/78480cc229b876bfbe9f4278bfef445b015834a1))
* **typography:** add focus state to the link ([19885f8](https://github.com/yosefbeder/design-system/commit/19885f89b1a7d39cda750173c6e2f5ff393c415c))
* **typography:** add resetting margin ([760084c](https://github.com/yosefbeder/design-system/commit/760084c76ca352582fa1f34966dead391e9530d3)), closes [#3](https://github.com/yosefbeder/design-system/issues/3) [#4](https://github.com/yosefbeder/design-system/issues/4)
* **typography:** add showing the link to header with-id on focus ([a8e471b](https://github.com/yosefbeder/design-system/commit/a8e471b312781b5e6bbb2fc4370378a1c9c33b8b))
* **typography:** replace custom variables with the new ones ([6f68952](https://github.com/yosefbeder/design-system/commit/6f68952b5fc6e9b8d7bcb1209df9e35c0c076aee))


### Bug Fixes

* **components:** icons spacing inside buttons ([0fc949f](https://github.com/yosefbeder/design-system/commit/0fc949f33bfbc5b4a05a022664d63abab4fe8203))
* **components:** make boolean props consistent ([1b0343c](https://github.com/yosefbeder/design-system/commit/1b0343cbe84c3b6bd6ffcbb0e272785cb9e5dfc0))
* **components:** make the size of the input consistent ([f41c539](https://github.com/yosefbeder/design-system/commit/f41c539b4611fabfff34d9f277556317401cc8be))
* **css-reset:** pre default white-space ([49a07ce](https://github.com/yosefbeder/design-system/commit/49a07ce2b183d344d9c0188b5c07ffdfdb700466)), closes [#1](https://github.com/yosefbeder/design-system/issues/1)
* **custom-props:** rename stale to slate in the css file ([3eb2aae](https://github.com/yosefbeder/design-system/commit/3eb2aae536d44318781f8943421401fcefce85da))
