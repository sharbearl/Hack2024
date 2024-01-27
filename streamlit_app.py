import streamlit as st

col1, col2, col3, col4 = st.columns(4)

with col1.expander("Home"):
  home.write("this is a test")

water = st.expander("Water Log")
water.write("this is a test")
exercise = st.expander("Exercise Log")
food = st.expander("Food Log")

# USER INPUT + VARIABLE STORING
weight = st.text_input("Enter some text")

choice = st.number_input(label = "Adjust water", step = 1)

