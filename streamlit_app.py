import streamlit as st

home = st.expander("Home")
home.write("this is a test")
water = st.expander("Water Log")
water.write("this is a test")
exercise = st.expander("Exercise Log")
food = st.expander("Food Log")

# USER INPUT + VARIABLE STORING
weight = st.text_input("Enter some text")

choice = st.number_input("Adjust water")
