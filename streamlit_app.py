import streamlit as st

home = st.expander(“Home”)
water = st.expander(“Water Log”)
exercise = st.expander(“Exercise Log”)
food = st.expander(“Food Log”)

# USER INPUT + VARIABLE STORING
weight = st.text_input("Enter some text")
while (type(weight) != double or type(weight) != int)
{
  st.text("Invalid input")
}


