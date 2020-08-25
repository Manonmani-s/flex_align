
# Flex Box

A Flexbox layout consists of a flex container that holds flex items. The flex container can be laid out horizontally or vertically. 

## Create a flex container

The first step in any flexbox layout is to create a flex container. To do that, set the display property to flex. This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.
	  .container {
         display: flex | inline-flex;
         }


## Properties of the Flex Container      
    
    flex-direction
    justify-content
    align-items
    flex-wrap
    flex-flow
    align-content



## Properties of the Flex Items:

    flex-grow
    flex-shrink
    flex-basis
    flex
    order
    align-self
  

## Properties of the Flex Container Explained
### 1. Flex-direction
Flex-direction is the first property we will be working with. There are four options here. Row, row-reverse, column, & column-reverse. If flex-direction isn't specified, it is row by default. Row items will move along the x-axis, column items will move along the y-axis. The diagram below explains how it all flows.
 
        .flex-container  {
         flex-direction: row | row-reverse | column | column-reverse;
         }

![enter image description here](http://codropspz.tympanus.netdna-cdn.com/codrops/wp-content/uploads/2015/02/flex-direction-illustration.jpg)




>HINT
Aligning Items in a Flex Container detailed explanation can be found in the following link:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container


### 2. Justify-Content
The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
***Flex-direction:row***
	

	.flex-container  {
		justify-content: flex-start|flex-end|center|space-between|  
				 space-around|initial|inherit;
		      }
   
![enter image description here](https://miro.medium.com/max/700/1*V1bfijm-RCdlxcZhP7tYwA.png)

***Flex-direction:column***	

![enter image description here](https://miro.medium.com/max/700/1*XGm7JEbXLe3e9_XAdgZDYw.png)
      

### 3. Align-Items
The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.
  

     .flex-container  {
      align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | safe center| unsafe center;
    }

***Flex-direction:row***	

![enter image description here](https://miro.medium.com/max/700/1*ClFep05U_OkI3uA4fcDibQ.png)


### 4. Flex-wrap
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

    flex-wrap: nowrap | wrap | wrap-reverse
    
    Ex:
    .flex-container  {
      flex-wrap: wrap;
    }

![enter image description here](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/10/flex-wrap-illustration.jpg)


 
### 5. Flex-flow
The flex-flow property is sub-property of flexible box layout module and also shorthand property for flex-wrap and flex-direction. Note:The flex property is useless when the element is not flexible item.

    Syntax:
    flex-flow: flex-direction flex-wrap;
    
    .flex-container {
    flex-flow:row nowrap;
    }
    
case 1:
	**row nowrap:**
	 It arrange the row same as text direction and the default value of wrap-flex is nowrap. It is used to specify that the item has no wrap. It makes item wrap in single lines.
	
	
![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-209.png)

case 2:
**row-reverse nowrap:**
	 It arrange the row opposite of text direction and the default value of wrap-flex is nowrap. It is used to specify that the item has no wrap. It makes item wrap in single lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-210-1.png)

case 3:
**column nowrap:**
	same as row but top to bottom and the default value of wrap-flex is nowrap. It is used to specify that the item has no wrap. It makes item wrap in single lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-211-1.png)

case 4:
**column-reverse nowrap:** 
	Same as row-reverse top to bottom and the default value of wrap-flex is nowrap. It is used to specify that the item has no wrap. It makes item wrap in single lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-212-1.png)

case 5:
**row wrap:** 
	It arrange the row same as text direction and wrap property is used to break the flex item into multiples lines. It makes flex items wrap to multiple lines according to flex item width

 ![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-208-1.png)

case 6:
**row-reverse wrap:** 
It arrange the row opposite of text direction and wrap property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-213.png)

case 7:
**column wrap:** 
	It arrange the row same as row but top to bottom and wrap property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-214-2.png)

case 8:
**column-reverse wrap:**
	It arrange the row same as row-reverse top to bottom. and wrap property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-215.png)

case 9:
**row wrap-reverse:** 
	It arrange the row same as text direction and wrap-reverse property This property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-216-1.png)

case 10:
**row-reverse wrap-reverse:** 
	It arrange the row opposite text direction and wrap-reverse property This property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-217-1.png)

case 11:
**column wrap-reverse:** 
	It arrange the row same as row but top to bottom.and wrap-reverse property This property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-218.png)

case 12:
**column-reverse wrap-reverse:** 
	It arrange the row same as row-reverse top to bottom and wrap-reverse property This property is used to reverse the flow of the flex items when they wrap to new lines.

![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-219.png)

### 6. Align-content
The alignContent property aligns the flexible container's items when the items do not use all available space on the cross-axis (vertically). The align-content property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.

>Tip    : Use the justifyContent property to align the items on the main-axis (horizontally). 

>*Note : There must be multiple lines of items for this property to have any effect, that implies align-content has no effect on a single line*


    align-content: flex-start | flex-end | center | space-between | space-around | stretch
    
    .flex-container {
      align-content: space-around;
    }

![enter image description here](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/10/align-content-illustration.jpg)

***Difference between align-items and align-content:***

**Align-items** is for ***items in a single row***. So for a single row of elements on main axis, align-items will align these items respective of each other and it will start with fresh perspective from the next row.
**Align-content** doesn't interfere with items in a row ***but with rows itself***. Hence, align-content will try to align rows with respect to each other and flex container.


## Properties of the Flex Items Explained
### 1. Flex-grow
 The flex-grow property sets the flex grow factor of a flex item. A flex grow factor is a <number> which determines how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. The initial value is zero (0), and negative numbers are invalid.

If the flex items are laid out on the flex line such that they don’t take up the entire space on that line, you can “expand” the flex items so that they fill up the entire line. The amount of available space on the line can be distributed among the flex items following a specific proportion that you can specify using the flex-grow property. The higher the flex-grow value, the more the item will be allowed to grow relative to the other items.

For example, you can distribute the space among the flex items such that one of these items always gets twice as much space as the others. You can do that by setting the flex-grow property value to 2 (two). An item with flex-grow: 2 will grow twice as much as an item with flex-grow: 1—it gets twice as much space as the latter. So, for every one pixel that the second item gets, the first item grows by two pixels. 

    .flex-item{ 
    flex-grow:intergervalue;
    }

![enter image description here](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/10/flex-grow-illustration.jpg)


### 2. Flex-shrink
The flex-shrink property specifies how the item will shrink relative to the rest of the flexible items inside the same container. flex-shrink property allow item to shrink as container size decreases

>Note: If the element is not a flexible item, the flex-shrink property has no effect. *Default value: 0.* 

If all items in the container have value as 1, then all the items will shrink in equal ratio. And all items have value as 1 except one item, which has value 2, then this item will shrink to half the other items.

![enter image description here](https://dzone.com/storage/temp/13385232-1588685072443.png)

As you can see above in the given flex-shrink: 2 to the third element shrink twice as much as other elements. Negative values are not allowed.

     .flex-item{ 
        flex-shrink:intergervalue;
        }

### 3. Flex-basis
Flex-basis is nothing but the min-width for the container items in flex box context. *Default value: Auto*(or default height when using flex-direction: column).
For example, if we haven't provided value to the flex-basis property, then its value will be auto by default, then flex box items will take the width, which is equal to the content width (or default height when using flex-direction: column).
In general, the flex-basis property defines the size of the flex-item along the main axis of the flex container. The main axis is horizontal if flex-direction is set to row and it’ll be vertical if the flex-direction property is set to column.


![enter image description here](https://www.cssmine.com//content/dist/images/original/flexbox-flex-basis.jpg)

       flex-basis: <width> /*  width:auto/0/width  */
    
    .flex-item {
      flex-basis: 15em;
    }


### 4. Flex
Flex is shorthand for grow, shrink, and basis — all put together. It defaults to 0 (grow) 1 (shrink) and auto (basis).

>flex is shorthand for flex-grow, flex-shrink, and flex-basis 

       .flex-item {
       flex: <flex-grow> <flex-shrink> <flex-basis> /*Default value: 0 1 auto*/
	       }
	       
### 5. Order
Using order property it’s possible to re-arrange the natural order of items.



        order: <number>
    
	    .flex-item {
	      order: 2;
	    }

![enter image description here](https://miro.medium.com/max/700/1*BdoGsWOIFJ3IGW7j193W2Q.png)

The order property explained:

In addition to reversing the order in which flex items are visually displayed, you can target individual items and change where they appear in the visual order with the order property.

The order property is designed to lay the items out in ordinal groups. What this means is that items are assigned an integer that represents their group. The items are then placed in the visual order according to that integer, lowest values first. If more than one item has the same integer value, then within that group the items are laid out as per source order.

As an example, I have 5 flex items, and assign order values as follows:

    Source item 1: order: 2
    Source item 2: order: 3
    Source item 3: order: 1
    Source item 4: order: 3
    Source item 5: order: 1

These items would be displayed on the page in the following order:

    Source item 3: order: 1
    Source item 5: order: 1
    Source item 1: order: 2
    Source item 2: order: 3
    Source item 4: order: 3
  

Flex items have a default order value of 0, therefore items with an integer value greater than 0 will be displayed after any items that have not been given an explicit order value.


### 6. Align-self
The align-self property is a sub-property of the Flexible Box Layout module.

**It makes possible to override the align-items value for specific flex items.**

The align-self property accepts the same 5 values as the align-items:

flex-start: cross-start margin edge of the item is placed on the cross-start line  flex-end: cross-end margin edge of the item is placed on the cross-end line
center: item is centered in the cross-axis
baseline: items are aligned such as their baseline are aligned
stretch (default): stretch to fill the container (still respect min-width/max-width)

    
    align-self: auto | flex-start | flex-end | center | baseline | stretch
    
    .flex-item {
      align-self: flex-end;
    }

![enter image description here](https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg)

In the above example align-items of the container is flex-start but the item3 is  overriden by align-self flex item property and it is  set at the flexend.
