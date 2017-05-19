/**
 * Created by ttn on 09/05/17.
 */
import React from 'react';
import { SplitButton, MenuItem, Label } from 'react-bootstrap';

const MenuItems = [{
    displayText: 'Fashion',
    subItems: [
            {
                category: 'Kids',
                categoryItems: [{ displayText: 'Suits'}, { displayText: 'Party Wear'}]
            },
            {
                category: 'Men',
                categoryItems: [{ displayText: 'Casuals'}, { displayText: 'Office wear'}]
            }
        ]
    },
    {
        displayText: 'Electronics',
        subItems: [
            {
                category: 'Mobile',
                categoryItems: [{ displayText: 'Samsung'}, { displayText: 'Lenovo'}]
            },
            {
                category: 'Laptops',
                categoryItems: [{ displayText: 'Apple'}, { displayText: 'Dell'}]
            }
        ]

    }
];

export default class FKMenuBar extends React.Component {
    render () {
        return (
            <div>
                {
                    MenuItems.map((menuItem, index) => (
                        <SplitButton title={menuItem.displayText} pullRight id={menuItem.displayText} key={`${menuItem.displayText}-${index}`}>
                            {
                                menuItem.subItems.map((subItem, index) => (
                                    <div>
                                        <Label bsStyle="primary" key={`${menuItem.displayText}-${subItem.category}-${index}`} id={`${menuItem.displayText}-${subItem.category}-${index}`}>{subItem.category}</Label>
                                        {
                                            subItem.categoryItems.map((categoryItem, index) => (
                                                    <MenuItem id={`${menuItem.displayText}-${subItem.category}-${categoryItem.displayText}`} eventKey={`${menuItem.displayText}-${subItem.category}-${categoryItem.displayText}`}>
                                                        {categoryItem.displayText}
                                                    </MenuItem>
                                                )
                                            )
                                        }
                                    </div>
                                ))
                            }

                        </SplitButton>
                    ))
                }
            </div>
        )
    }
}