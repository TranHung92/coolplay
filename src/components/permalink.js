import React from 'react'

export default function Permalink({ link, text, title }) {
	return (
		<a href="{link}" title={title}>
			<span>{text}</span>
		</a>
	)
}