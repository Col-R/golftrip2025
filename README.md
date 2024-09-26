### What
# Boys Trip 2025

This is a quick website to assist with planning a trip for me and the boys next year.

### Why
This will list potential courses, hotels, dates, and costs to help us make a decision.

### Where
Branson, MO

### When
Winter, 2025

## Site Layout

Here’s a layout summary for your golf trip planning site using React, TypeScript, and TailwindCSS:

### Layout Summary

**Header:**
- A main title for the site (e.g., "Golf Trip 2025").
- Positioned at the top, centered horizontally.
- Large font size, bold, white color for visibility over the background image.

**Summary:**
- A short paragraph directly beneath the title.
- Centered horizontally, smaller than the title.
- White or light font color to contrast with the background image.

**Background:**
- A full-page background image of a golf course.
- The image should cover the entire viewport (`background-size: cover`).
- You may use `bg-fixed` to keep the image fixed as users scroll, if applicable.

**Main Content:**
- Below the summary, 4 evenly spaced columns: Courses, Hotels, Cars, Dates.
- Each column contains relevant information or placeholder content, aligned vertically in a grid.
- Center these columns within the viewport.
- Consider using Tailwind's grid or flex utilities for responsive design.

### TailwindCSS Styling Notes
- Use `flex` or `grid` for arranging the columns.
- Use `text-center` for centering the title and summary.
- Apply `bg-cover` and `bg-center` for the background image to fit well on all screen sizes.
- For column responsiveness, use Tailwind's `grid-cols-1` (on mobile) to `grid-cols-4` (on large screens).