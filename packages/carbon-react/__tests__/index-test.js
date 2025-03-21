/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Carbon from '../src/index';

describe('Carbon Components React', () => {
  it('can be imported using the correct path', () => {
    expect(typeof Carbon).toBe('object');
  });

  it('should export components', () => {
    expect(Object.keys(Carbon).sort()).toMatchInlineSnapshot(`
Array [
  "Accordion",
  "AccordionItem",
  "AccordionSkeleton",
  "AspectRatio",
  "Breadcrumb",
  "BreadcrumbItem",
  "BreadcrumbSkeleton",
  "Button",
  "ButtonSet",
  "ButtonSkeleton",
  "Checkbox",
  "CheckboxSkeleton",
  "ClickableTile",
  "CodeSnippet",
  "CodeSnippetSkeleton",
  "Column",
  "ComboBox",
  "ComposedModal",
  "Content",
  "ContentSwitcher",
  "Copy",
  "CopyButton",
  "DangerButton",
  "DataTable",
  "DataTableSkeleton",
  "DatePicker",
  "DatePickerInput",
  "DatePickerSkeleton",
  "Dropdown",
  "DropdownSkeleton",
  "ErrorBoundary",
  "ErrorBoundaryContext",
  "ExpandableSearch",
  "ExpandableTile",
  "FileUploader",
  "FileUploaderButton",
  "FileUploaderDropContainer",
  "FileUploaderItem",
  "FileUploaderSkeleton",
  "Filename",
  "FluidForm",
  "Form",
  "FormGroup",
  "FormItem",
  "FormLabel",
  "Grid",
  "Header",
  "HeaderContainer",
  "HeaderGlobalAction",
  "HeaderGlobalBar",
  "HeaderMenu",
  "HeaderMenuButton",
  "HeaderMenuItem",
  "HeaderName",
  "HeaderNavigation",
  "HeaderPanel",
  "HeaderSideNavItems",
  "IconSkeleton",
  "InlineLoading",
  "InlineNotification",
  "Link",
  "ListItem",
  "Loading",
  "Modal",
  "ModalBody",
  "ModalFooter",
  "ModalHeader",
  "MultiSelect",
  "NotificationActionButton",
  "NotificationButton",
  "NotificationTextDetails",
  "NumberInput",
  "NumberInputSkeleton",
  "OrderedList",
  "OverflowMenu",
  "OverflowMenuItem",
  "Pagination",
  "PaginationNav",
  "PaginationSkeleton",
  "PasswordInput",
  "PrimaryButton",
  "ProgressIndicator",
  "ProgressIndicatorSkeleton",
  "ProgressStep",
  "RadioButton",
  "RadioButtonGroup",
  "RadioButtonSkeleton",
  "RadioTile",
  "Row",
  "Search",
  "SearchFilterButton",
  "SearchLayoutButton",
  "SearchSkeleton",
  "SecondaryButton",
  "Select",
  "SelectItem",
  "SelectItemGroup",
  "SelectSkeleton",
  "SelectableTile",
  "SideNav",
  "SideNavDetails",
  "SideNavDivider",
  "SideNavFooter",
  "SideNavHeader",
  "SideNavIcon",
  "SideNavItem",
  "SideNavItems",
  "SideNavLink",
  "SideNavLinkText",
  "SideNavMenu",
  "SideNavMenuItem",
  "SideNavSwitcher",
  "SkeletonPlaceholder",
  "SkeletonText",
  "SkipToContent",
  "Slider",
  "SliderSkeleton",
  "StructuredListBody",
  "StructuredListCell",
  "StructuredListHead",
  "StructuredListInput",
  "StructuredListRow",
  "StructuredListSkeleton",
  "StructuredListWrapper",
  "Switch",
  "Switcher",
  "SwitcherDivider",
  "SwitcherItem",
  "Tab",
  "TabContent",
  "Table",
  "TableActionList",
  "TableBatchAction",
  "TableBatchActions",
  "TableBody",
  "TableCell",
  "TableContainer",
  "TableExpandHeader",
  "TableExpandRow",
  "TableExpandedRow",
  "TableHead",
  "TableHeader",
  "TableRow",
  "TableSelectAll",
  "TableSelectRow",
  "TableToolbar",
  "TableToolbarAction",
  "TableToolbarContent",
  "TableToolbarMenu",
  "TableToolbarSearch",
  "Tabs",
  "TabsSkeleton",
  "Tag",
  "TagSkeleton",
  "TextArea",
  "TextAreaSkeleton",
  "TextInput",
  "TextInputSkeleton",
  "Theme",
  "Tile",
  "TileAboveTheFoldContent",
  "TileBelowTheFoldContent",
  "TileGroup",
  "TimePicker",
  "TimePickerSelect",
  "ToastNotification",
  "Toggle",
  "ToggleSkeleton",
  "ToggleSmall",
  "ToggleSmallSkeleton",
  "Toolbar",
  "ToolbarDivider",
  "ToolbarItem",
  "ToolbarOption",
  "ToolbarSearch",
  "ToolbarTitle",
  "Tooltip",
  "TooltipDefinition",
  "TooltipIcon",
  "UnorderedList",
  "unstable_ContextMenu",
  "unstable_ContextMenuDivider",
  "unstable_ContextMenuGroup",
  "unstable_ContextMenuItem",
  "unstable_ContextMenuRadioGroup",
  "unstable_ContextMenuSelectableItem",
  "unstable_Heading",
  "unstable_PageSelector",
  "unstable_Pagination",
  "unstable_ProgressBar",
  "unstable_Section",
  "unstable_TreeNode",
  "unstable_TreeView",
  "unstable_useContextMenu",
  "useTheme",
]
`);
  });
});
