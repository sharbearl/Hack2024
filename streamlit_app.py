import streamlit as st

# USER INPUT + VARIABLE STORING
try:
  weight = st.text_input("Enter some text")
except ValueError as e:
  st.text(f"Error: {e}")

